class ContactFormData {
    constructor(fields) {
        this.name = fields.name;
        this.email = fields.email;
        this.topic = fields.topic;
        this.message = fields.message;
        this.consent = fields.consent;
        this.createdAt = new Date();
    }

    get topicLabel() {
        const map = {
            buy: "Хочу купить монету",
            sell: "Хочу продать монету",
            question: "Задать вопрос",
        };
        return map[this.topic] || this.topic;
    }

    print() {
        console.log("____ Данные формы обратной связи ____");
        console.log(`Имя:       ${this.name}`);
        console.log(`Email:     ${this.email}`);
        console.log(`Тема:      ${this.topicLabel}`);
        console.log(`Сообщение: ${this.message || "(не заполнено)"}`);
        console.log(`Согласие:  ${this.consent ? "да" : "нет"}`);
        console.log(`Создано:   ${this.createdAt.toLocaleString("ru-RU")}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const data = new ContactFormData({
            name: (formData.get("name") || "").toString().trim(),
            email: (formData.get("email") || "").toString().trim(),
            topic: (formData.get("topic") || "").toString(),
            message: (formData.get("message") || "").toString().trim(),
            consent: formData.get("consent") === "on",
        });

        data.print();
        form.reset();
    });
});