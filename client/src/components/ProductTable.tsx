// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Product } from '../types/product';

// TODO(reto): Implementar la lógica para manejar la edición y eliminación de productos
// Este componente debe:
// 1. Recibir la lista de productos como prop
// 2. Mostrar cada producto en una fila de la tabla
// 3. Emitir eventos cuando se solicite editar o eliminar un producto
// 4. Manejar el estado de carga mientras se realizan las operaciones

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit, onDelete, isLoading }) => {
  throw new Error('TODO(reto): anonymous');
};

export default ProductTable;