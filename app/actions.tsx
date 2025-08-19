'use server'

import { imageKit } from "@/lib/imageKitUtils";

export const shareAction = async (formData: FormData, settings: {type: "original" | "wide" | "square" , sensitive: boolean}) => {
    const file = formData.get('file') as File;
    //const desc = formData.get('desc') as String;
    console.log(file.size);
    

    // to upload an image we need to turn into binary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transformation = `w-600, ${settings.type === 'square' 
        ? 'ar-1-1' 
        : settings.type === 'wide'
        ? 'ar-16-9'
        : ''
    }`

    imageKit.upload({
        file: buffer,
        fileName: file.name,
        folder: "/posts",
        ...(file.type.includes("image") && {
            transformation: {
                pre: transformation,
            },
        }),
        customMetadata: {
            sensitive: settings.sensitive,
        }
    }, function (error, result) {
        if (error) console.log(error)
        else console.log(result)
    });

}