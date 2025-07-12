/**
 * Italian Translations
 *
 * @author Vittorio Scaperrotta
 * @date 10-Jul-2025
 */

export default {
  // Common
  'app.title': 'Gestore Chiavi SSH',
  'app.loading': 'Caricamento...',
  'app.error': 'Errore',
  'app.close': 'Chiudi',
  'app.cancel': 'Annulla',
  'app.confirm': 'Conferma',
  'app.save': 'Salva',
  'app.delete': 'Elimina',
  'app.edit': 'Modifica',
  'app.create': 'Crea',
  'app.search': 'Cerca',
  'app.details': 'Dettagli',
  'app.actions': 'Azioni',
  'app.yes': 'Sì',
  'app.no': 'No',

  // SearchBar
  'searchbar.placeholder': 'Cerca...',
  'searchbar.reset': 'Ripristina',

  // Header
  'header.totalKeys': 'Totale chiavi',
  'header.subtitle': 'Strumento per gestire le tue chiavi SSH locali',

  // Home
  'home.createNewKey': 'Crea Nuova Chiave',
  'home.search.placeholder': 'Cerca chiavi per nome...',

  // Table
  'table.name': 'Nome',
  'table.type': 'Tipo',
  'table.file': 'File',
  'table.notes': 'Note',
  'table.status': 'Stato',
  'table.creation': 'Creazione',
  'table.actions': 'Azioni',
  'table.noKeys': 'Nessuna chiave SSH trovata',

  // Modal Detail
  'modal.detail.title': 'Dettagli Chiave SSH',
  'modal.detail.subtitle': 'Informazioni dettagliate della chiave SSH',
  'modal.detail.publicKey': 'Chiave Pubblica',
  'modal.detail.privateKey': 'Chiave Privata',
  'modal.detail.copyToClipboard': 'Copia negli Appunti',
  'modal.detail.copied': 'Copiato!',

  // Modal Delete
  'modal.delete.title': 'Elimina Chiave SSH',
  'modal.delete.confirmation': 'Sei sicuro di voler eliminare questa chiave SSH?',
  'modal.delete.name': 'Nome',
  'modal.delete.type': 'Tipo',
  'modal.delete.deleting': 'Eliminazione in corso...',
  'modal.delete.error': 'Errore durante l\'eliminazione della chiave',

  // Modal New Key
  'modal.newKey.title': 'Crea Nuova Chiave SSH',
  'modal.newKey.subtitle': 'Inserisci i dettagli per creare una nuova chiave SSH',
  'modal.newKey.name.label': 'Nome della chiave*:',
  'modal.newKey.name.placeholder': 'es. github_key',
  'modal.newKey.name.help': 'Il nome del file della chiave',
  'modal.newKey.name.required': 'Il nome della chiave è obbligatorio',
  'modal.newKey.name.invalid': 'Il nome può contenere solo lettere, numeri, underscore, trattini e punti',
  'modal.newKey.type.label': 'Tipo di chiave:',
  'modal.newKey.bits.label': 'Lunghezza (bit):',
  'modal.newKey.bits.recommended': 'raccomandato',
  'modal.newKey.obsolete': 'obsoleto',
  'modal.newKey.dsa.warning': 'Attenzione: DSA è considerato obsoleto e non sicuro per gli standard attuali',
  'modal.newKey.comment.label': 'Commento:',
  'modal.newKey.comment.placeholder': 'es. user@email.com',
  'modal.newKey.comment.help': 'Solitamente un indirizzo email o un identificativo',
  'modal.newKey.creating': 'Creazione in corso...',
  'modal.newKey.create': 'Crea Chiave',
  'modal.newKey.error': 'Errore durante la creazione della chiave',
  'modal.newKey.error.serverDown': 'Impossibile contattare il server. Verifica che sia attivo.',

  // Status
  'status.complete': 'Completa',
  'status.onlyPrivate': 'Solo Privata',
  'status.unknown': 'Sconosciuto',
};
