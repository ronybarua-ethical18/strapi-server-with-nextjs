'use strict';

const path = require('path');
const { Readable } = require('stream');

function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', (data) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on('error', reject);
  });
}

function sanitizeKey(key) {
  // Remove any leading slashes or underscores
  key = key.replace(/^[/_]+/, '');
  
  // Replace spaces, parentheses, and other problematic characters
  key = key.replace(/[\s()~]/g, '_');
  
  // Ensure the key doesn't exceed Supabase's maximum length (you may need to adjust this)
  const maxLength = 256;
  if (key.length > maxLength) {
    const ext = path.extname(key);
    const basename = path.basename(key, ext);
    key = basename.slice(0, maxLength - ext.length - 1) + ext;
  }
  
  return key;
}

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    if (strapi.plugins.upload.provider && !strapi.plugins.upload.provider.uploadStream) {
      strapi.log.info('Adding uploadStream function to upload provider');
      
      strapi.plugins.upload.provider.uploadStream = async (file) => {
        try {
          let buffer;
          
          if (file.stream instanceof Readable) {
            buffer = await streamToBuffer(file.stream);
          } else if (Buffer.isBuffer(file.buffer)) {
            buffer = file.buffer;
          } else if (typeof file.buffer === 'string') {
            buffer = Buffer.from(file.buffer, 'base64');
          } else {
            throw new Error('Unsupported file format');
          }
          
          // Sanitize the file path/name
          const sanitizedPath = sanitizeKey(file.path || file.name);
          
          const fileWithBuffer = {
            ...file,
            buffer: buffer,
            path: sanitizedPath,
            name: path.basename(sanitizedPath)
          };
          delete fileWithBuffer.stream;

          return await strapi.plugins.upload.provider.upload(fileWithBuffer);
        } catch (error) {
          strapi.log.error('Error in uploadStream:', error);
          throw error;
        }
      };
    }
  },
};