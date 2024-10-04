type  Clients = {
    name : string ;
    tktNumber:number;
    isPriority: boolean ;
   };
   
   class waitingList{
    
         private queue: Clients[] = [];
         private currentTicketNumber = 100;
    
    addClient(name: string, isPriority: boolean): void{
     const client: Clients = {
         name,
         tktNumber: this.currentTicketNumber++ ,
         isPriority 
       };
   
       if (isPriority) {
         this.queue.unshift(client);
       } else {
         this.queue.push(client);
       }
       console.log(`Client ajouté : ${client.name} avec ticket numéro ${client.tktNumber} (Prioritaire: ${client.isPriority ? "Oui" : "Non"})`);
    }

     retirerDernierClient(): void {
      if (this.queue.length > 0) {
        const clientServi = this.queue.shift();
        console.log(`Client retiré : ${clientServi?.name} avec ticket numéro ${clientServi?.tktNumber}`);
      } else {
        console.log("Aucun client dans la file d'attente.");
      }
    }
   
     // Afficher l'état actuel de la file d'attente
     afficherFile(): void {
       if (this.queue.length > 0) {
         console.log("État actuel de la file d'attente :");
         this.queue.forEach(client => {
           console.log(`Client: ${client.name}, Ticket: ${client.tktNumber}, Prioritaire: ${client.isPriority ? "Oui" : "Non"}`);
         });
       } else {
         console.log("La file d'attente est vide.");
       }
     }
   
   }
  
   const file = new waitingList();
   
   if (window.confirm('veut-tu ajouter une client')){
   file.addClient("Haftom", false);           
   }
   if (window.confirm('veut-tu ajouter une client')){
    file.addClient("Romin", true);              
   }
   if (window.confirm('veut-tu ajouter une client')){
    file.addClient("Zeyneb", false);       
   }  
   
   if (window.confirm("voulez-vous Affiche l'état actuel du dossier")){
    file.afficherFile();                    // Affiche l'état actuel de la file
   }
  
   if (window.confirm("voulez-vous Affiche l'état actuel du dossier")){
    file.retirerDernierClient();         // Retire le premier client (prioritaire)
    file.afficherFile(); 
   }


