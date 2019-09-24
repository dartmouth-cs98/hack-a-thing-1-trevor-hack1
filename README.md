# Hack-a-thing-1
## Short description of what you attempted to build
I attempted to build a secret message encrypter to allow users to pass secret messages to each other without anyone knowing what the message says. The encryption method used is called one time pad encryption which is theoretically unbreakable without the key as every code sequence has an unlimited amount of possibilities. To use this application, the user inputs a message and presses "Encrypt". They are then presented with their encrypted message and the key to solve this encryption is stored in a database. When a user wants to decrypt their message, they simply input it in the decrypt box and press "Decrypt". The key is then fetched from the database.
## What you learned
Though this application is very simple in use, I had to learn and be familiar with topics I have never encountered to accomplish it and make it quasi secure.

Some of the topics that I learned during this assignment include:
	
    * Basic Encryption Algorithms
    * Hashing (MD5, SHA-2)
    * Salting
    * Peppering
    * Rainbow Tables
    * Best Practices for Security
    * Packet Sniffing
    * AES
    
## What didn’t work
Some things that I learned were unnecessarily complex to implement (i.e. peppering), but there are some things I encountered that were too complex for the small scope of this assignment. One thing that didn't work and I could possibly improve on if I had more time, would be a custom backend. Firebase is great for basic data storage, but with all my sensitive information being handled on the front-end can be dangerous. Additionally, I think if I had more time I could implement a better hashing + salting method to map the encrypted message to its key in the database. 
## Who did what 
I did this by myself
## Acknowledgements
[Youtube Video that inspired project](https://www.youtube.com/watch?v=R5LqOqaBYG8)

[More In Depth Article about topics](https://www.thesslstore.com/blog/difference-encryption-hashing-salting/)

[Rainbow Tables](https://www.lifewire.com/rainbow-tables-your-passwords-worst-nightmare-2487288)

[Salting and Peppering](https://medium.com/@berto168/salt-pepper-spice-up-your-hash-b48328caa2af)

Background picture obtained via pixabay.com
