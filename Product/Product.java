import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

   //Attribut
class Product {
    private String name;
    private double price;
    private boolean inStock;

    //Contructor
    public Product(String name, double price, boolean inStock) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }

    //Methodes
    public boolean isInStock() {
        return inStock;
    }

//heritage / surcharge pour redefinir la méthode
    @Override
    public String toString() {
        return name + " ($" + price + ")";
    }
}
