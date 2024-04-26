
    document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
        event.preventDefault(); 

       
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        
        const dadosFormulario = {
            Nome: nome,
            Email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        
        const options = {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': 'h0t6fw17vXyvfqMYcZjJV8wvMEDNRy4QWm3YJDX3',
                'X-Parse-REST-API-Key': 'CxodBH7fnayMX7CtMZtkb78svENJ4j9wLHvH9Qgy',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosFormulario)
        };

        try {
            
            const response = await fetch('https://parseapi.back4app.com/classes/chamado', options);

            
            if (response.ok) {
                
                window.alert('Chamada enviada!');
                document.getElementById('cadastroForm').reset();
            } else {
                
                console.error('Erro ao enviar o chamado:', response.statusText);
                
            }
        } catch (error) {
            console.error('Erro ao enviar o chamado:', error);
            
        }
    });

