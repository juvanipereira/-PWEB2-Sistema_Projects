import Inputs from '../form/Inputs'


import styles from './Contact.module.css'


function Contact({btnText}) {


    return (
      
    <form className={styles.contact_container}>    
      <h1>Formulário</h1>
       <p>Preencha o formulário para falar com nossa equipes</p>
       

             
        <Inputs 
         type="text"
         text=" Nome"
         name="name"
         placeholder="Insira o seu nome"
         />
      
        <Inputs 
         type="text"
         text=" E-Mail"
         name="name"
         placeholder="Insira o seu E-Mail"
         
         />
        <Inputs 
         type="text"
         text=" Empresa"
         name="name"
         placeholder="Insira o nome da sua Empressa"
         />
          <Inputs 
         type="text"
         text=" Telefone"
         name="name"
         placeholder="Insira o seu numero de Telefone" />

          <textarea name="mensagem" id="mensagem" placeholder="Mensagem:"></textarea>
        <div>
          <button className='LinkButton_btn__srhv5' type="submit" >Enviar</button>
        </div>
        </form>
   
   
    
    )
  }

export default Contact
