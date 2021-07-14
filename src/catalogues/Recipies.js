import React from "react";
import Product from "../components/Product";
import pineappleJuice from "../img/products/recipes/pineappleJuice.jpeg";
import pancake from "../img/products/recipes/pancake.jpeg";
import beefsauce from "../img/products/recipes/beefsauce.jpeg";
import jollof from "../img/products/recipes/jollof.jpeg";

//* Products Images

function Recipies() {
  return (
    <div>
      <div>
        <h2>Shop from our List of Recipies by Top Cooks </h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: "70px",
          }}
        >
          <Product
            name={`Pineapple and Ginger Juice`}
            description={`rep fruit and roots.  Chop ingredients into smaller pieces than you would if feeding through a juicer.
            Blend. Add all of the ingredients to a high powered blender and blend until smooth. 
            Strain. Pour the blended juice through a fine mesh strainer into a glass to eliminate any stringy pieces of root and bits of fruit.
            Stir and Enjoy. Stir the juice with a wooden spoon to blend well. Pour 1/4 glass full of juice, 1/4 glass full of crushed ice, and fill the rest of the glass with coconut water or distilled water. Garnish with lime slices and fresh mint.`}
            featureList={["Pineapple", "Ginger"]}
            kiloPrice={20}
            imgsrc={pineappleJuice}
          />
          <Product
            name={`Beef Sauce`}
            description={`1 kg beef
            2 red bell peppers
            2 green bell peppers
            4 carrots
            1/3 cup green peas
            1 bulb onion
            1 teaspoon garlic paste
            teaspoon ginger
            1 teaspoon paprika
            teaspoon curry
            1 teaspoon thyme
            2 tablespoons cornflour
            teaspoon cayenne pepper
            2 beef stock cubes`}
            featureList={["Pineapple", "Ginger"]}
            kiloPrice={40}
            imgsrc={beefsauce}
          />
          <Product
            name={`Pancake`}
            description={`rep fruit and roots.  Chop ingredients into smaller pieces than you would if feeding through a juicer.
            Blend. Add all of the ingredients to a high powered blender and blend until smooth. 
            Strain. Pour the blended juice through a fine mesh strainer into a glass to eliminate any stringy pieces of root and bits of fruit.
            Stir and Enjoy. Stir the juice with a wooden spoon to blend well. Pour 1/4 glass full of juice, 1/4 glass full of crushed ice, and fill the rest of the glass with coconut water or distilled water. Garnish with lime slices and fresh mint.`}
            featureList={["Pineapple", "Ginger"]}
            kiloPrice={50}
            imgsrc={pancake}
          />
          <Product
            name={`Pancake`}
            description={`6 large tomatoes
            4 large onions
            6 cloves of pressed garlic
               chillies (amount of your choice)
            2 tablespoons of tomato paste
            vegetable oil
            500g of beef, chicken or lamb (alt: mixed vegetables)
            800g long grain rice
            1,5 litres of water or stock (± 1 stock cube, depending on how much meat is used)`}
            featureList={["Pineapple", "Ginger"]}
            kiloPrice={70}
            imgsrc={jollof}
          />
        </div>
      </div>
    </div>
  );
}

export default Recipies;
