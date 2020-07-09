import {ethers} from 'ethers';

/*
This script generates authentication headers for the Derivadex REST API
from a mnemonic

Mnemonic generator for testing:     
   https://allprivatekeys.com/mnemonic-code-converter#english

**SECURITY NOTE**
Testing only - use a generic test mnemonic.
Do not use your own live mnemonic here
*/

// Add your mnemonic here 
const mnemonic = 'inflict stairs vast caution vacant female boring label mandate more cash heart pen school pattern';

// The message to encode
const message = 'hello';


async function encode(message: string, mnemonic: string) {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);                        
  const signedMessage = await wallet.signMessage(message);                    
  const address = await wallet.getAddress(); 

  console.log(`--Headers--------------
x-auth-ethereum-address: ${address} 
x-auth-message: ${message}   
x-auth-signature: ${signedMessage}     
-----------------------
`);  

  return signedMessage;                            
};


encode(message, mnemonic);
