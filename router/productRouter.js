import express from "express"
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/productController.js"


const router = express.Router()

router.get("/api/product/display",getAllProducts)
router.get("/api/product/display/:id",getSingleProduct)
router.post("/api/product/create",createProduct)
router.delete("/api/product/delete/:id",deleteProduct)
router.patch("/api/product/update/:id",updateProduct)

export default router