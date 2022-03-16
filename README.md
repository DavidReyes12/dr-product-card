# DR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### David Reyes

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "dr-product-card";
```


```
<ProductCard 
    product={ product }
    initialValues={{ 
        count: 4,
        // maxCount: 10
    }}
>
    {
        ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
