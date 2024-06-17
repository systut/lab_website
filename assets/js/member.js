document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "facultyStaff": {
            "professors": [
                {
                    "name": "Dr. Alice Johnson",
                    "lastEducation": "Ph.D. in Molecular Biology, Harvard University",
                    "major": "Molecular Biology",
                    "researchMapLink": "http://example.com/alice_johnson",
                    "image": "alice_johnson.jpg"
                },
                {
                    "name": "Dr. Bob Smith",
                    "lastEducation": "Ph.D. in Genetics, Stanford University",
                    "major": "Genetics",
                    "researchMapLink": "http://example.com/bob_smith",
                    "image": "bob_smith.jpg"
                },
                {
                    "name": "Dr. Carol Davis",
                    "lastEducation": "Ph.D. in Biochemistry, MIT",
                    "major": "Biochemistry",
                    "researchMapLink": "http://example.com/carol_davis",
                    "image": "carol_davis.jpg"
                }
            ],
            "researchers": [
                "Researcher 1",
                "Researcher 2",
                "Researcher 3"
            ],
            "secretaries": [
                "Jane Doe",
                "John Doe"
            ]
        },
        "members": {
            "doctors": [
                "Doctor 1",
                "Doctor 2",
                "Doctor 3"
            ],
            "masters": [
                "Master 1",
                "Master 2",
                "Master 3"
            ],
            "bachelors": [
                "Bachelor 1",
                "Bachelor 2",
                "Bachelor 3"
            ]
        }
    };

    // Faculty and Staff
    const professorsDiv = document.getElementById('professors');
    data.facultyStaff.professors.forEach(professor => {
        const profDiv = document.createElement('div');
        profDiv.style.display = 'flex';
        profDiv.style.marginBottom = '20px';

        const img = document.createElement('img');
        img.src = professor.image;
        img.alt = professor.name;
        img.style.width = '150px';
        img.style.height = 'auto';
        img.style.marginRight = '20px';

        const descDiv = document.createElement('div');
        descDiv.innerHTML = `
            <p>${professor.name}</p>
            <p>${professor.lastEducation}</p>
            <p>${professor.major}</p>
            <p><strong>Research Map</strong> <a href="${professor.researchMapLink}" target="_blank">${professor.researchMapLink}</a></p>
        `;

        profDiv.appendChild(img);
        profDiv.appendChild(descDiv);
        professorsDiv.appendChild(profDiv);
    });

    const researchersDiv = document.getElementById('researchers');
    const researchersList = document.createElement('ul');
    data.facultyStaff.researchers.forEach(researcher => {
        const li = document.createElement('li');
        li.textContent = researcher;
        researchersList.appendChild(li);
    });
    researchersDiv.innerHTML = '<h3>研究員 /Researcher</h3>';
    researchersDiv.appendChild(researchersList);

    const secretariesDiv = document.getElementById('secretaries');
    const secretariesList = document.createElement('ul');
    data.facultyStaff.secretaries.forEach(secretary => {
        const li = document.createElement('li');
        li.textContent = secretary;
        secretariesList.appendChild(li);
    });
    secretariesDiv.innerHTML = '<h3>事務補佐・技術補佐員 /Secretary</h3>';
    secretariesDiv.appendChild(secretariesList);

    // Members
    const doctorsDiv = document.getElementById('doctors');
    const doctorsList = document.createElement('ul');
    data.members.doctors.forEach(doctor => {
        const li = document.createElement('li');
        li.textContent = doctor;
        doctorsList.appendChild(li);
    });
    doctorsDiv.innerHTML = '<h3>博士課程 /Doctor</h3>';
    doctorsDiv.appendChild(doctorsList);

    const mastersDiv = document.getElementById('masters');
    const mastersList = document.createElement('ul');
    data.members.masters.forEach(master => {
        const li = document.createElement('li');
        li.textContent = master;
        mastersList.appendChild(li);
    });
    mastersDiv.innerHTML = '<h3>修士課程 /Master course</h3>';
    mastersDiv.appendChild(mastersList);

    const bachelorsDiv = document.getElementById('bachelors');
    const bachelorsList = document.createElement('ul');
    data.members.bachelors.forEach(bachelor => {
        const li = document.createElement('li');
        li.textContent = bachelor;
        bachelorsList.appendChild(li);
    });
    bachelorsDiv.innerHTML = '<h3>学部生 /Bachelor</h3>';
    bachelorsDiv.appendChild(bachelorsList);
});