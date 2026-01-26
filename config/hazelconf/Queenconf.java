public class Queenconf {

    public final Config config = new Config();


    public class Config {
        public class Menu {
        }

        public final Menu menu = new Menu();

          public final int rowsPerPage = 10; // How many rows of product are shown per page
          public final boolean showBlackFridayBanner = true; // show banner for black friday or hide it
          public final boolean showExtraHeader = false; // show extra header or hide it
    }

}

