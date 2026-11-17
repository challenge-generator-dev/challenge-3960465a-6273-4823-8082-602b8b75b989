import { useState, useCallback } from 'react';
import { Container, Typography, Box, Alert, Snackbar } from '@mui/material';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';
import ProductTable from '../components/ProductTable';
import ProductForm from '../components/ProductForm';
import { useProducts } from '../hooks/useProducts';

export function Home() {
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const {
    products,
    isLoading,
    createProduct,
    updateProduct,
    deleteProduct,
    refetch,
  } = useProducts();

  const handleCreate = useCallback(async (productData: CreateProductDto | UpdateProductDto) => {
    try {
      await createProduct(productData as CreateProductDto);
      setSnackbar({ open: true, message: 'Producto creado exitosamente', severity: 'success' });
      refetch();
      setEditingProduct(undefined);
    } catch {
      setSnackbar({ open: true, message: 'Error al crear el producto', severity: 'error' });
    }
  }, [createProduct, refetch]);

  const handleUpdate = useCallback(async (productData: CreateProductDto | UpdateProductDto) => {
    if (!editingProduct) return;
    try {
      await updateProduct(editingProduct.id, productData as UpdateProductDto);
      setSnackbar({ open: true, message: 'Producto actualizado exitosamente', severity: 'success' });
      refetch();
      setEditingProduct(undefined);
    } catch {
      setSnackbar({ open: true, message: 'Error al actualizar el producto', severity: 'error' });
    }
  }, [editingProduct, updateProduct, refetch]);

  const handleEdit = useCallback((product: Product) => {
    setEditingProduct(product);
  }, []);

  const handleDelete = useCallback(async (id: string) => {
    try {
      await deleteProduct(id);
      setSnackbar({ open: true, message: 'Producto eliminado exitosamente', severity: 'success' });
      refetch();
      if (editingProduct?.id === id) {
        setEditingProduct(undefined);
      }
    } catch {
      setSnackbar({ open: true, message: 'Error al eliminar el producto', severity: 'error' });
    }
  }, [deleteProduct, refetch, editingProduct]);

  const handleCancelEdit = useCallback(() => {
    setEditingProduct(undefined);
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setSnackbar(prev => ({ ...prev, open: false }));
  }, []);

  const handleSubmit = useCallback(async (productData: CreateProductDto | UpdateProductDto) => {
    if (editingProduct) {
      await handleUpdate(productData);
    } else {
      await handleCreate(productData);
    }
  }, [editingProduct, handleUpdate, handleCreate]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Gestión de Productos
      </Typography>

      <Box sx={{ mb: 4 }}>
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancelEdit}
          isLoading={isLoading}
        />
      </Box>

      <Box>
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}