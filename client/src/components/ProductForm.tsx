import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';

interface ProductFormProps {
  product?: Product;
  onSubmit: (productData: CreateProductDto | UpdateProductDto) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    price: 0,
    category: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
      });
    } else {
      setFormData({
        name: '',
        price: 0,
        category: '',
      });
    }
  }, [product]);

  const validate = (): boolean => {
    let valid = true;
    const newErrors = { name: '', price: '', category: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      valid = false;
    }

    if (formData.price <= 0) {
      newErrors.price = 'El precio debe ser mayor que 0';
      valid = false;
    }

    if (!formData.category.trim()) {
      newErrors.category = 'La categoría es requerida';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await onSubmit(formData);
      setFormData({ name: '', price: 0, category: '' });
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        {product ? 'Editar Producto' : 'Crear Producto'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          disabled={isLoading}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Precio"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          disabled={isLoading}
          inputProps={{ step: '0.01', min: '0' }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Categoría"
          name="category"
          value={formData.category}
          onChange={handleChange}
          error={!!errors.category}
          helperText={errors.category}
          disabled={isLoading}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant="outlined"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? 'Guardando...' : product ? 'Actualizar' : 'Crear'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductForm;