import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class ProductFilter {
    public static List<Product> filterProductsByStock(List<Product> products) {
        return products.stream()
                .filter(Product::isInStock)
                .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Pomme", 1.5, true));
        products.add(new Product("Banane", 1.0, false));
        products.add(new Product("Cerise", 2.5, true));
        products.add(new Product("Ananas", 3.0, false));
        products.add(new Product("Orange", 1.8, true));

        List<Product> filteredProducts = filterProductsByStock(products);
        System.out.println("Produits en stock : " + filteredProducts);
    }
}
