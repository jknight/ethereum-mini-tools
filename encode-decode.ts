import {ethers} from 'ethers';

//Jeffrey Knight <jknight@derivadex.com>
//Jul 9, 2020 at 4:33:39 PM

const mnemonic = 'remove merit blouse relief surface birth bone audit fee remove shoot easily';

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
