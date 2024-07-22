<template>
    <div class="container">
        <h1>Contacto</h1>
        <div class="contact-card">
            <h2>Zuricata's Food</h2>
            <p class="title">John Smith</p>
            <p>Chief Innovation Officer</p>
            <p>123 Eco Street, Suite 456<br>Sustainable City, ST 78910</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:john.smith@zuricata.com">john.smith@zuricata.com</a></p>
            <p>Website: <a href="http://www.zuricata.com" target="_blank">www.zuricata.com</a></p>
            <p class="slogan">"Innovating for a Greener Future"</p>
        </div>
        <div class="btn">
            <button class="button-index" @click="volverInicio"> Volver al Inicio</button>
        </div>
       
    </div>
</template>

<script>
export default {
    methods: {
        volverInicio() {
            return this.$router.push('/');
        },
    }

}
</script>

<style>
.btn{display: flex;
    justify-content: center;}
    .button-index {
    margin-top: 10px;
    margin-left: 5px;
    padding: 5px;
    color: white;
    background-color: #e83e8c;
    border-radius: 8px;
    border-color: #e83e8c;
}

.contact-card {
    font-family: Arial, sans-serif;
    border: 1px solid #ddd;
    padding: 20px;
    width: 300px;
    margin: 0 auto;
}

.contact-card h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #e83e8c;
}

.contact-card p {
    margin: 5px 0;
}

.contact-card .title {
    font-weight: bold;
}

.contact-card .slogan {
    font-style: italic;
    color: #555;
    margin-top: 15px;
}
</style>