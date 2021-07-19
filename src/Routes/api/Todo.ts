import { Router, Request, Response } from 'express'
import Todo from '../../Schema/Todo'
import { check, validationResult } from 'express-validator'

const router = Router()

router.get('/', async (_, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: `Server Error`})
    }
})

router.post('/', [
    check('body', 'Task body is required').not().isEmpty()
], async (req: Request, res: Response) => {
    const errs = validationResult(req)
    if(!errs.isEmpty()) return res.status(400).json({ errs: errs.array() })

    const { body } = req.body

    try {
        const newTodo = new Todo({
            body: body
        })

        await newTodo.save()

        return res.status(201).json(newTodo)
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({msg: 'Server Error'})
    }
})

router.patch('/:id', [
    check('body', 'Task body is required').not().isEmpty(),
    check('id', 'Todo id is required to update it').not().isEmpty().isMongoId()
], async (req: Request, res: Response) => {
    const errs = validationResult(req)
    if(!errs.isEmpty()) return res.status(400).json({ errs: errs.array() })

    const { body } = req.body

    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, { body: body })
        return res.status(200).json(todo)
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({msg: 'Server Error'})
    }

})

router.put('/:id', [
    check('completed').not().isEmpty().isBoolean(),
    check('id', 'Todo id is required to update it').not().isEmpty().isMongoId()
], async (req: Request, res: Response) => {
    const errs = validationResult(req)
    if(!errs.isEmpty()) return res.status(400).json({ errs: errs.array() })

    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed })
        return res.status(200).json(todo)
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({msg: 'Server Error'})       
    }
})

router.delete('/:id', [
    check('id', 'Todo id is required to update it').not().isEmpty().isMongoId()
], async (req: Request, res: Response ) => {
    const errs = validationResult(req)
    if(!errs.isEmpty()) return res.status(400).json({ errs: errs.array() })

    try {
        await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json({msg: `Todo successfully deleted`})
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({msg: 'Server Error'})       
    }
})

export default router