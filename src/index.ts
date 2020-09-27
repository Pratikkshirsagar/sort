import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollections";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollaction = new CharacterCollection("Xaaybc");
charactersCollaction.sort();
console.log(charactersCollaction.data);
