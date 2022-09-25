if  ( ! chat . isBanned  &&  chat . audios  &&  m . text . match ( / ( onichan ) / gi ) )  {    
let  vn  =  '../multimedia/sonidos/onich.mp3'
esto _ sendPresenceUpdate ( 'grabación' ,  m . chat )   
esto _ sendFile ( m . chat ,  vn ,  'error.mp3' ,  null ,  m ,  true ,  { type : 'audioMessage' ,  ptt : true } ) }
    
volver  ! 0  }
 controlador predeterminado de  exportación
