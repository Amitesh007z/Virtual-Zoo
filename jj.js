import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const animals = [
    {
      name: "Lion",
      type: "Mammal",
      diet: "Carnivore",
      habitat: "Savanna, grasslands",
      lifespan: "25 years (in captivity)"
    },
    {
      name: "Elephant",
      type: "Mammal",
      diet: "Herbivore",
      habitat: "Savannas, grasslands, forests",
      lifespan: "70 years (in captivity)"
    },
    {
      name: "Dolphin",
      type: "Mammal",
      diet: "Carnivore (fish, squid)",
      habitat: "Oceans",
      lifespan: "25-50 years"
    },
    {
      name: "Snake",
      type: "Reptile",
      diet: "Carnivore (varies by species)",
      habitat: "Varies widely (forests, deserts, oceans)",
      lifespan: "Varies widely (10-30 years for most species)"
    },
    {
      name: "Owl",
      type: "Bird",
      diet: "Carnivore (rodents, insects)",
      habitat: "Forests, grasslands, deserts",
      lifespan: "10-20 years"
    }
  ];

  function getRandomNumber() {
    return Math.floor(Math.random() * 5); 
  }
  
  const n = getRandomNumber();
 
  
  
console.log(animals[n]);
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render(__dirname + "/main.ejs",{nam:animals[n]})
    
  });



