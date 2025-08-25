import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function toggleSoldOut(id) {
    setPlants(plants =>
      plants.map(plant =>
        plant.id === id
          ? { ...plant, soldOut: !plant.soldOut }
          : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main>
        <NewPlantForm addPlant={addPlant} />
        <Search search={search} setSearch={setSearch} />
        <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut} />
      </main>
    </div>
  );
}

export default App;