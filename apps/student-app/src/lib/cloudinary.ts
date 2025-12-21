import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getSignedUrl = (fullUrl: string) => {
    try {
        if (!process.env.CLOUDINARY_API_SECRET) {
            return fullUrl;
        }

        const urlParts = fullUrl.split('/');
        const uploadIndex = urlParts.indexOf('upload');

        if (uploadIndex === -1) return fullUrl;

        // resource_type is usually before 'upload'
        let resourceType = urlParts[uploadIndex - 1];
        if (resourceType !== 'image' && resourceType !== 'video' && resourceType !== 'raw') {
            resourceType = 'auto';
        }

        // public_id is everything after 'upload/v<version>/' or 'upload/'
        const pathAfterUpload = urlParts.slice(uploadIndex + 1).join('/');

        // Extract version if present
        const versionMatch = pathAfterUpload.match(/^v(\d+)\//);
        const version = versionMatch ? versionMatch[1] : undefined;

        // Remove version from path to get public_id + extension
        let publicId = pathAfterUpload.replace(/^v\d+\//, '');

        let format = undefined;

        // For non-raw resources (image/video), the extension is NOT part of the public_id.
        // It is the format. We must strip it for signing to work correctly.
        if (resourceType !== 'raw') {
            const lastDotIndex = publicId.lastIndexOf('.');
            if (lastDotIndex !== -1) {
                format = publicId.substring(lastDotIndex + 1);
                publicId = publicId.substring(0, lastDotIndex);
            }
        }

        // Raw resources are public by default and don't need signing if uploaded as raw
        const shouldSign = resourceType !== 'raw';

        return cloudinary.url(publicId, {
            resource_type: resourceType,
            sign_url: shouldSign,
            secure: true,
            api_key: process.env.CLOUDINARY_API_KEY,
            format: format,
            version: version
        });
    } catch (error) {
        console.error("Error signing Cloudinary URL:", error);
        return fullUrl;
    }
};
