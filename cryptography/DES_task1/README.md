# DES

DES stands for Data Encryption Standard. It was a widely used symmetric-key algorithm for the encryption of electronic data. It was developed in the early 1970s by IBM and later adopted by the U.S. government as an official standard in 1977.  

DES operates on a 64-bit block of data and uses a 56-bit key for encryption and decryption. It uses a series of complex permutations and substitutions to transform the input data into ciphertext. However, due to advances in computing power, DES gradually became susceptible to brute-force attacks.  

# Script

To run script:

1. Install node and yarn
2. Execute in directory

```
yarn
yarn build

# Or pass any other file and 8-byte key
node ./dist/index.js ../50KB-plain-text.txt 12345678
```
## Results

It takes around 3000 ms to encrypt 54 KB
