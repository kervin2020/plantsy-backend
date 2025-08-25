import React from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage({ plants, addPlant, handleSoldOut, search, setSearch }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList
        plants={plants.filter(plant =>
          plant.name.toLowerCase().includes(search.toLowerCase())
        )}
        handleSoldOut={handleSoldOut}
      />
    </main>
  );
}

export default PlantPage;