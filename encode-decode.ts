import {ethers} from 'ethers';

//Jeffrey Knight <jknight@derivadex.com>
//Jul 9, 2020 at 4:33:39 PM

// Mnemonic generator for testing: https://allprivatekeys.com/mnemonic-code-converter#english

// Add your mnemonic here (SECURITY NOTE: use a test mnemonic only!)
const mnemonic = 'inflict stairs vast caution vacant female boring label mandate more cash heart pen school pattern';

// The message to encode
const message = 'hello';

async function encode(message: string, mnemonic: string) {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);                        
  const signedMessage = await wallet.signMessage(message);                    
  const address = await wallet.getAddress();                                 

  console.log('--Encode--------------');
  console.log(`Message: ${message}`);   
  console.log(`Signed Message: ${signedMessage}`);     
  console.log(`Wallet Address: ${address}`);  
  console.log('----------------------');  

  return signedMessage;                            
};


encode(message, mnemonic);
