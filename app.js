// Global list that stores all ancestor records
let ancestorsList = [];

// When the page loads: load saved data and activate the form
document.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    renderAncestorCards();
    document.getElementById("ancestor-form").addEventListener("submit", handleFormSubmit);
    document.getElementById("filter-type").addEventListener("change", renderAncestorCards);
});

// Runs when the user clicks "Generate Strategy"
function handleFormSubmit(event) {
    event.preventDefault();

    // Read the values typed by the user
    const name = document.getElementById("ancestor-name").value.trim();
    const type = document.getElementById("brick-wall-type").value;

    if (!name || !type) {
        alert("Please fill in all fields.");
        return;
    }

    // Create one ancestor object and save it in the list
    const newAncestor = {
        id: Date.now(),
        name: name,
        type: type,
        steps: generateStrategy(type),
        dateAdded: new Date().toLocaleDateString()
    };

    ancestorsList.push(newAncestor);
    saveToLocalStorage();
    renderAncestorCards();
    event.target.reset();
}

// Conditional logic: returns a list of research steps for each brick wall type
function generateStrategy(type) {
    if (type === "birth") {
        return [
            "Check local parish baptismal and church records.",
            "Look for civil registration late-birth filings.",
            "Search census records for estimated birth years."
        ];
    } else if (type === "parents") {
        return [
            "Check marriage records of the children for parents' names.",
            "Investigate probate, wills and inheritance documents.",
            "Look at land deeds and property tax records."
        ];
    } else if (type === "immigration") {
        return [
            "Search passenger arrival manifests and port logs.",
            "Check naturalization petitions and declarations.",
            "Look for passport and border crossing records."
        ];
    } else {
        return ["Review all existing documents for transcription errors."];
    }
}

// Removes one ancestor from the list using its id
function deleteAncestor(id) {
    ancestorsList = ancestorsList.filter(ancestor => ancestor.id !== id);
    saveToLocalStorage();
    renderAncestorCards();
}

// Saves the list in the browser as JSON text
function saveToLocalStorage() {
    try {
        localStorage.setItem("genealogy_ancestors", JSON.stringify(ancestorsList));
    } catch (error) {
        console.error("Could not save data:", error);
    }
}

// Loads the saved list from the browser
function loadFromLocalStorage() {
    try {
        const savedData = localStorage.getItem("genealogy_ancestors");
        if (savedData) {
            ancestorsList = JSON.parse(savedData);
        }
    } catch (error) {
        console.error("Could not read saved data:", error);
        ancestorsList = [];
    }
}

// Draws one card on the page for each ancestor in the list
function renderAncestorCards() {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    const filter = document.getElementById("filter-type").value;
    const visibleList = ancestorsList.filter(a => filter === "all" || a.type === filter);

    if (visibleList.length === 0) {
        container.innerHTML = "<p>No strategies yet. Add your first ancestor above!</p>";
        return;
    }

    visibleList.forEach(ancestor => {
        const card = document.createElement("div");
        card.className = "strategy-card";

        // textContent is safe: it never runs code typed by the user
        const title = document.createElement("h3");
        title.textContent = "Ancestor: " + ancestor.name;

        const obstacle = document.createElement("p");
        obstacle.textContent = "Obstacle: " + ancestor.type.toUpperCase();

        // Numbered list with the research steps
        const stepsList = document.createElement("ol");
        ancestor.steps.forEach(step => {
            const item = document.createElement("li");
            item.textContent = step;
            stepsList.appendChild(item);
        });

        const date = document.createElement("small");
        date.textContent = "Added on: " + ancestor.dateAdded;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteAncestor(ancestor.id));

        card.append(title, obstacle, stepsList, date, deleteButton);
        container.appendChild(card);
    });
}