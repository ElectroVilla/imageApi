import {promises as fs} from 'fs'
import path from 'path'
import sharp from 'sharp'
const sourceFolder =  path.join(__dirname, '../../images/full')
const productFolder =  path.join(__dirname, '../../images/thumbnails')

const resizeImage = async (name:string, width:number, height:number):Promise<void> => {
    const originalImage = sourceFolder + '/' + name + '.jpg'
    const thumbName = name + '_' + width + '_' + height + '.jpg'
    const productImage = productFolder + '/'  + thumbName
    try {
        await sharp(originalImage).resize(width, height).toFile(productImage)
    } catch (error) {
        throw new Error('Error processing the image')
    }
} 

const getCach = async (name: string): Promise<boolean> => {
    let retValue = false
    const existed = await fs.readdir(productFolder)
    existed.forEach(file => {
        if (file == name) {
            retValue = true
        }
    })
    return retValue
}

const buildImageList = async ():Promise<string[]> => {
    const imagesArray = await fs.readdir(sourceFolder) 
    return imagesArray
}

const validateResizeResponse = async (name:string, width:number, height:number): Promise<string | boolean> => {
    let errorResponse = "<h1>Input Error...!</h1><br>"
    let haveError = false
    const fullName = name + '.jpg'
    if (!(!isNaN(width) && width > 49 && width < 1201)) {
        haveError = true
        errorResponse += "<h2>Width information is not correct</h2><p>Width value should be exised and have a value greater than 50 and less than 1200</p><br>"
    }
    if (!(!isNaN(height) && height > 49 && height < 1201)) {
        haveError = true
        errorResponse += "<h2>Height information is not correct</h2><p>Height value should be exised and have a value greater than 50 and less than 1200</p><br>"
    }
    const availableImages = await buildImageList()
    if (!availableImages.includes(fullName)) {
        haveError = true
        errorResponse += "<h2>Image name is not correct</h2><p>Image name should be exised and one of the stored images with its extention</p><br>"
    }
    if (haveError) {
        return errorResponse
    }else{
        return true
    }
}

export = {
    resizeImage, 
    validateResizeResponse,
    getCach
    }