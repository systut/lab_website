    // JSON data
    const newsData = {
        "news": [
            {
                "date": "2024-06-21",
                "category": "Research",
                "text": "New research paper published on optimization techniques.",
                "link": "https://example.com"
            },
            {
                "date": "2024-06-20",
                "category": "Event",
                "text": "Upcoming seminar on system engineering.",
                "link": "https://example.com/seminar"
            },
            {
                "date": "2024-06-20",
                "category": "Event",
                "text": "Upcoming seminar on system engineering.",
                "link": "https://example.com/seminar"
            },
            {
                "date": "2024-06-20",
                "category": "Event",
                "text": "Upcoming seminar on system engineering.",
                "link": "https://example.com/seminar"
            },
            {
                "date": "2024-06-20",
                "category": "Event",
                "text": "Upcoming seminar on system engineering.",
                "link": "https://example.com/seminar"
            },
            {
                "date": "2024-06-20",
                "category": "Event",
                "text": "Upcoming seminar on system engineering.",
                "link": "https://example.com/seminar"
            }
        ]
    };

    // Function to populate the news section
    function populateNews(news) {
        const newsContainer = document.getElementById('news-container');
        news.forEach(item => {
            const newsRow = document.createElement('div');
            newsRow.className = 'row py-2';
            newsRow.innerHTML = `
                <div class="col-2">${item.date}</div>
                <div class="col-2">${item.category}</div>
                <div class="col-8">
                    ${item.text}
                    <br>
                    <a href="${item.link}">Read more</a>
                </div>
            `;
            newsContainer.appendChild(newsRow);
        });
    }

    // Populate news section on page load
    document.addEventListener('DOMContentLoaded', () => {
        populateNews(newsData.news);
    });