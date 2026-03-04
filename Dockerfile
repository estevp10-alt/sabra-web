# Dockerfile para desplegar landing estática en Easypanel/Docker
FROM nginx:alpine

# Copiar archivos del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
