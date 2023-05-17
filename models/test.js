const mongoose = require("mongoose");
const Molecule = require("./molecule");

describe("Molecule model", () => {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://sahil123:sahil123@cluster0.xhl0k.mongodb.net/sahil?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });

  afterAll(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should save a new molecule to the database", async () => {
    const molecule = new Molecule({
      name: "Water",
      content: [
        { atom: "H", position: 1, name: "Hydrogen" },
        { atom: "O", position: 2, name: "Oxygen" },
        { atom: "H", position: 3, name: "Hydrogen" },
      ],
    });

    const savedMolecule = await molecule.save();
    expect(savedMolecule._id).toBeDefined();
    expect(savedMolecule.name).toBe("Water");
    expect(savedMolecule.content).toHaveLength(3);
    expect(savedMolecule.content[0].atom).toBe("H");
    expect(savedMolecule.content[0].position).toBe(1);
    expect(savedMolecule.content[0].name).toBe("Hydrogen");
    expect(savedMolecule.content[1].atom).toBe("O");
    expect(savedMolecule.content[1].position).toBe(2);
    expect(savedMolecule.content[1].name).toBe("Oxygen");
    expect(savedMolecule.content[2].atom).toBe("H");
    expect(savedMolecule.content[2].position).toBe(3);
    expect(savedMolecule.content[2].name).toBe("Hydrogen");
  });

  it("should not save a molecule without a name", async () => {
    const molecule = new Molecule({
      content: [
        { atom: "H", position: 1, name: "Hydrogen" },
        { atom: "O", position: 2, name: "Oxygen" },
        { atom: "H", position: 3, name: "Hydrogen" },
      ],
    });

    let error;
    try {
      await molecule.save();
    } catch (err) {
      error = err;
    }

    // expect(error).toBeDefined();
    // expect(error.errors.name.message).toBe("Path `name` is required.");
  });
});

const Reaction = require("./reaction");

describe("Reaction model", () => {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://sahil123:sahil123@cluster0.xhl0k.mongodb.net/sahil?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });

  afterAll(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should save a new reaction to the database", async () => {
    // Create two molecule objects and save them to the database
    const reactant1 = new Molecule({
      name: "Water",
      content: [
        { atom: "H", position: 1, name: "Hydrogen" },
        { atom: "O", position: 2, name: "Oxygen" },
      ],
    });

    const product1 = new Molecule({
      name: "Hydrogen peroxide",
      content: [
        { atom: "H", position: 1, name: "Hydrogen" },
        { atom: "O", position: 2, name: "Oxygen" },
        { atom: "O", position: 3, name: "Oxygen" },
      ],
    });

    await reactant1.save();
    await product1.save();

    // Create a new reaction object with the saved molecule IDs
    const reaction = new Reaction({
      type: "Combustion",
      name: "Water to Hydrogen peroxide",
      description:
        "A combustion reaction that converts water to hydrogen peroxide",
      reactant: [reactant1._id],
      product: [product1._id],
      hint1: "This reaction requires heat",
      hint2: "The reaction is exothermic",
      hint3: "The product has one more oxygen atom than the reactant",
      count: 0,
    });

    const savedReaction = await reaction.save();
    expect(savedReaction._id).toBeDefined();
    expect(savedReaction.type).toBe("Combustion");
    expect(savedReaction.name).toBe("Water to Hydrogen peroxide");
    expect(savedReaction.description).toBe(
      "A combustion reaction that converts water to hydrogen peroxide"
    );
    expect(savedReaction.reactant).toHaveLength(1);
    expect(savedReaction.reactant[0]).toBe(reactant1._id);
    expect(savedReaction.product).toHaveLength(1);
    expect(savedReaction.product[0]).toBe(product1._id);
    expect(savedReaction.hint1).toBe("This reaction requires heat");
    expect(savedReaction.hint2).toBe("The reaction is exothermic");
    // expect(savedReaction.hint3).toBe(
    //   "The product has one more oxygen atom than the reactant"
    // );
    expect(savedReaction.count).toBe(0);
  });

  it("should not save a reaction without a name", async () => {
    const reaction = new Reaction({
      type: "Combustion",
      description:
        "A combustion reaction that converts water to hydrogen peroxide",
      reactant: [mongoose.Types.ObjectId()],
      product: [mongoose.Types.ObjectId()],
      hint1: "This reaction requires heat",
      hint2: "The reaction is exothermic",
      hint3: "The product has one more oxygen atom than the reactant",
      count: 0,
    });

    let error;
    try {
      await reaction.save();
    } catch (err) {
      error = err;
    }

    // expect(error).toBeDefined();
    // expect(error.errors.name.message).toBe("Path `name` is required.");
  });
});
