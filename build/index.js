"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollections_1 = require("./CharactersCollections");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollaction = new CharactersCollections_1.CharacterCollection("Xaaybc");
charactersCollaction.sort();
console.log(charactersCollaction.data);