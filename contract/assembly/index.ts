/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * 1. setGreeting: accepts a greeting, such as "howdy", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the greeting saved for it,
 *    defaulting to "Hello"
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { Context, logging, PersistentMap, storage } from 'near-sdk-as'

//Context.sender==='username.testnet'

let candidateReg = new PersistentMap<string,i32>("Candidate Registration");
let voterReg = new PersistentMap<string,bool>("Voters Registration");

//Context.sender = 'khairy.testnet'

export function addVote(Candidate:string):i32{
  if(!voterReg.contains(Context.sender)){
    voterReg.set(Context.sender,true)
    if(!candidateReg.contains(Candidate))
    {
      candidateReg.set(Candidate,1)
    }
    else
    {
      let currCount = candidateReg.getSome(Candidate);
      currCount = currCount + 1;
      candidateReg.set(Candidate,currCount);
    }
  }
  else
  {
    logging.log('You have already voted!')
  }
  return candidateReg.getSome(Candidate)
}