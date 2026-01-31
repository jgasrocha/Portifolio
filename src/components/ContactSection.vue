<template>
  <div id="contact-section" class="contact-container">
    <div class="contact-inner">
      <div class="contact-header">
        <h2 class="contact-title">Entre em Contato</h2>
        <p class="contact-subtitle">Vamos conversar sobre seu projeto</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="logo-container">
            <img
              src="../../assets/logo.png"
              alt="Logo João Gabriel"
              class="logo"
            />
          </div>
          <p class="info-text">
            Se você tem uma ideia, um projeto em mente ou apenas quer bater um
            papo sobre tecnologia, sinta-se à vontade para me enviar uma
            mensagem. Estou sempre aberto a novas oportunidades e colaborações!
          </p>
        </div>
        <div class="contact-form">
          <form ref="contactForm" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Seu Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="form.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Seu E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="_subject"
                v-model="form.subject"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                v-model="form.message"
                rows="5"
                required
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://sua-pagina.com/obrigado.html"
            />

            <button type="submit" class="submit-button">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showAlert" class="custom-alert-overlay">
        <div class="custom-alert">
          <div class="alert-icon">✓</div>
          <div class="alert-message">{{ alertMessage }}</div>
          <button @click="closeAlert" class="close-alert-button">Fechar</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      showAlert: false,
      alertMessage: "",
    };
  },
  methods: {
    async submitForm() {
      const formUrl = "https://formsubmit.co/joaogabriel.lad@gmail.com";

      try {
        const formData = new FormData(this.$refs.contactForm);

        const response = await fetch(formUrl, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          this.alertMessage = "Sua mensagem foi enviada com sucesso!";
        } else {
          this.alertMessage =
            "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
        }
      } catch (error) {
        this.alertMessage =
          "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
        console.error("Erro ao enviar o formulário:", error);
      } finally {
        this.showAlert = true;
        this.resetForm();
      }
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.subject = "";
      this.form.message = "";
    },
    closeAlert() {
      this.showAlert = false;
    },
  },
};
</script>

<style scoped>
.contact-container {
  padding: 80px 20px;
  text-align: center;
}

.contact-header {
  margin-bottom: 50px;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 5px;
  background: #2c3e50;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #555;
  font-style: italic;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info,
.contact-form {
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  width: 200px;
  height: 200px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container img {
  width: 100%;
  height: 100%;
}

.info-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #ff6b6b;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 107, 107, 0.5);
}

.submit-button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #e65c5c;
  transform: translateY(-2px);
}

/* Estilos do Alerta */
.custom-alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.custom-alert {
  background-color: #f0f0f0;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 90%;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}

.alert-icon {
  font-size: 3rem;
  color: #4caf50;
  font-weight: bold;
  margin-bottom: 15px;
}

.alert-message {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 25px;
  line-height: 1.5;
}

.close-alert-button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.close-alert-button:hover {
  background-color: #e65c5c;
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */
@media (max-width: 768px) {
  .contact-container {
    padding: 50px 20px;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-subtitle {
    font-size: 1rem;
  }

  .contact-content {
    flex-direction: column;
    gap: 30px;
  }

  .contact-info,
  .contact-form {
    padding: 30px;
    min-width: unset;
    text-align: center;
  }

  .info-text {
    font-size: 1rem;
  }

  .logo-container {
    width: 150px;
    height: 150px;
  }
}
</style>
