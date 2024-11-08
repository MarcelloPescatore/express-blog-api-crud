Esercizio eCommerce - API CRUD
Repository: express-ecommerce-api-crud

## Obiettivi:
Creazione di una risorsa di prodotto

**Crea una rotta POST /products:**
- Questa rotta dovrebbe invocare un metodo store del controller dei prodotti per gestire l'operazione di creazione.
- La rotta riceve i dati del prodotto in formato JSON (come nome, descrizione, prezzo, quantità, ecc.).
- Dopo aver creato il nuovo prodotto, restituisce la lista aggiornata dei prodotti in formato JSON, incluso il nuovo prodotto appena aggiunto.
- Lista di tutti i prodotti

**Crea una rotta GET /products:**
- Questa rotta dovrebbe restituire un JSON con l'elenco di tutti i prodotti disponibili nel "database" (puoi usare un file JSON per la persistenza, come visto in classe).
- Aggiornamento di un prodotto

**Crea una rotta PUT /products/:id:**
- Implementa un metodo update nel controller dei prodotti che permette di aggiornare un prodotto esistente.
- La rotta riceve i dati aggiornati del prodotto in formato JSON e li applica al prodotto corrispondente all'id passato come parametro.
- Dopo l'aggiornamento, restituisce l'elenco dei prodotti aggiornato, incluso il prodotto modificato.
- Eliminazione di un prodotto

**Crea una rotta DELETE /products/:id:**
- Implementa un metodo delete nel controller dei prodotti per gestire l'eliminazione di un prodotto esistente.
- La rotta dovrebbe rimuovere il prodotto corrispondente all'id passato come parametro.
- Dopo aver eliminato il prodotto, restituisce l'elenco aggiornato dei prodotti in formato JSON.
- Persistenza dei dati

- Utilizza il modulo fs per salvare l'array dei prodotti in un file JSON, garantendo che ogni modifica (creazione, aggiornamento, eliminazione) sia persistente.
- Assicurati di aggiornare il file ogni volta che viene eseguita un'operazione di modifica sui dati.

**Test degli endpoint**
- Testa tutte le rotte (creazione, lettura, aggiornamento, eliminazione) utilizzando Postman.
- Verifica che ogni rotta funzioni correttamente e che i dati siano salvati correttamente nel file.

## Bonus
Rotta per ottenere un prodotto specifico

**Crea una rotta GET /products/:id:**
- Implementa un metodo show nel controller dei prodotti che permette di recuperare un prodotto specifico in base all'id.
- La rotta restituisce i dettagli del prodotto corrispondente.
Gestione errori

**Aggiungi la gestione degli errori per i seguenti casi:**
- Se un prodotto non esiste, restituisci un errore significativo (es. "Prodotto non trovato").
- Gestisci eventuali errori di lettura/scrittura del file JSON.
Documentazione API
