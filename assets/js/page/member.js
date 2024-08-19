document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "facultyStaff": {
            "professors": [
                {
                    "name": "内山　直樹",
                    "lastEducation": "Ph.D. in Mechanical Engineering, Tokyo Metropolitan University",
                    "researchMapLink": "https://researchmap.jp/n_u",
                    "image": "https://via.placeholder.com/150"
                },
                {
                    "name": "高橋　淳二",
                    "lastEducation": "Ph.D. in ...",
                    "researchMapLink": "https://researchmap.jp/jtakahashi",
                    "image": "https://via.placeholder.com/150"
                },
                {
                    "name": "堀尾　亮介",
                    "lastEducation": "Ph.D. in Mechanical Engineering, Toyohashi University of Technology",
                    "researchMapLink": "https://researchmap.jp/r_h",
                    "image": "https://via.placeholder.com/150"
                }
            ],
            "visiting_professors": [
                "寺内　謙一",
                "中山　浩樹"
            ],
            "researchers": [
                "百濟　和文",
                "Abedelrahiem Farrage",
                "Mathew Renny Msukwa"
            ],
            "secretaries": [
                "小嶋　有紀"
            ]
        },
        "members": {
            "doctors": {
                "博士３年 / Doctor 3nd year": ["佐藤　隆史", "舟本　公路", "HARYSON JOHANES NYOBUYA"],
                "博士２年 / Doctor 2nd year": ["百濟　和文", "NUR AZIZAH AMIR", "TRAN VIET THANH"],
                "博士１年 / Doctor 1st year": ["MUHAMMAD HAZIQ BIN NOOR AKASHAH", "DINH NGOC DUC"]
            },
            "masters": {
                "修士２年 / Master 2nd year": ["高尾　直人", "後藤　偲月", "冨士原　直人", "中尾　拓真", "板垣　光晟", "生嶋　玄明", "CAREY SINAGA", "NGUYEN VAN TAI", "HOANG XUAN THANG", "KHEMAKHEM ISKANDAR"],
                "修士１年 / Master 1st year": ["山本　大輝", "平原　凜", "石河　大", "小川　永遠", "BURENTEGSH ENKHBAYASGALAN", "DONIDDORJ BAYANJARGAL", "HOANG THO THUYEN", "NGUYEN HAI PHONG", "DANG BA LOC", "DANATAROVA OGULNUR"]
            },
            "bachelors": {
                "学部４年 / Bachelor 4th year": ["石原　拓人", "糸川　陽希", "馬渡　大明", "村上　和音", "小松　脩征", "木田　博貴", "利根川　涼", "ANDY WILLIAM"]
            }
        }
    };

    // Faculty and Staff
    const professorsDiv = document.getElementById('professors');
    data.facultyStaff.professors.forEach(professor => {
        const profDiv = document.createElement('div');
        profDiv.className = 'd-flex mb-3 align-items-center';

        const img = document.createElement('img');
        img.src = professor.image;
        img.alt = professor.name;
        img.className = 'rounded-circle me-3';
        img.style.width = '100px';

        const descDiv = document.createElement('div');
        descDiv.innerHTML = `
            <strong>${professor.name}</strong><br>
            ${professor.lastEducation}<br>
            <a href="${professor.researchMapLink}" target="_blank">Research Map</a>
        `;

        profDiv.appendChild(img);
        profDiv.appendChild(descDiv);
        professorsDiv.appendChild(profDiv);
    });

    const visitingProfessorsDiv = document.getElementById('visiting_professors');
    const visitingProfessorssList = document.createElement('ul');
    data.facultyStaff.visiting_professors.forEach(visiting_professors => {
        const li = document.createElement('li');
        li.textContent = visiting_professors;
        visitingProfessorssList.appendChild(li);
    });
    visitingProfessorsDiv.innerHTML = '<h3>客員教授 / Visiting Professors</h3>';
    visitingProfessorsDiv.appendChild(visitingProfessorssList);

    const researchersDiv = document.getElementById('researchers');
    const researchersList = document.createElement('ul');
    data.facultyStaff.researchers.forEach(researcher => {
        const li = document.createElement('li');
        li.textContent = researcher;
        researchersList.appendChild(li);
    });
    researchersDiv.innerHTML = '<h3>研究員 / Researcher</h3>';
    researchersDiv.appendChild(researchersList);

    const secretariesDiv = document.getElementById('secretaries');
    const secretariesList = document.createElement('ul');
    data.facultyStaff.secretaries.forEach(secretary => {
        const li = document.createElement('li');
        li.textContent = secretary;
        secretariesList.appendChild(li);
    });
    secretariesDiv.innerHTML = '<h3>事務補佐・技術補佐員 / Secretary</h3>';
    secretariesDiv.appendChild(secretariesList);

    // Members
    const doctorsDiv = document.getElementById('doctors');
    Object.keys(data.members.doctors).forEach(level => {
        const section = document.createElement('div');
        section.innerHTML = `<h4>${level}</h4>`;
        const ul = document.createElement('ul');
        data.members.doctors[level].forEach(member => {
            const li = document.createElement('li');
            li.textContent = member;
            ul.appendChild(li);
        });
        section.appendChild(ul);
        doctorsDiv.appendChild(section);
    });

    const mastersDiv = document.getElementById('masters');
    Object.keys(data.members.masters).forEach(level => {
        const section = document.createElement('div');
        section.innerHTML = `<h4>${level}</h4>`;
        const ul = document.createElement('ul');
        data.members.masters[level].forEach(master => {
            const li = document.createElement('li');
            li.textContent = master;
            ul.appendChild(li);
        });
        section.appendChild(ul);
        mastersDiv.appendChild(section);
    });

    const bachelorsDiv = document.getElementById('bachelors');
    if (Object.keys(data.members.bachelors).length > 0) {
        Object.keys(data.members.bachelors).forEach(level => {
            const section = document.createElement('div');
            section.innerHTML = `<h4>${level}</h4>`;
            const ul = document.createElement('ul');
            data.members.bachelors[level].forEach(bachelor => {
                const li = document.createElement('li');
                li.textContent = bachelor;
                ul.appendChild(li);
            });
            section.appendChild(ul);
            bachelorsDiv.appendChild(section);
        });
    } else {
        bachelorsDiv.innerHTML = "<p>No bachelor members available.</p>";
    }
});