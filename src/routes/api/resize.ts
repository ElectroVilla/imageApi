import express from 'express'
import support from '../../support'
import BASE from '../../support/constants'
const resize = express.Router()

resize.get('/', async (req:express.Request, res:express.Response):Promise<void> => {
    const width = parseInt(req.query.width as string, 10)
    const height = parseInt(req.query.height as string, 10)
    const name = req.query.name as string
    const targetProductImage = name + '_' + width + '_' + height + '.jpg'
    const validArgs = await support.validateResizeResponse(name, width, height)
    if (validArgs === true) {
        const exised = await support.getCach(targetProductImage)
        if (exised) {
            res.send(`<img src="${BASE}images/thumbnails/${targetProductImage}">`)
        }else{
            await support.resizeImage(name, width, height)
            .then(() => {
                res.send(`<img src="${BASE}images/thumbnails/${targetProductImage}">`)
            })
        }    
    }else{
        res.send(validArgs)
    }
})

export default resize