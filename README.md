# caesar-cipher-cli
caesar-cipher-cli - cipher or decode input data be Casar coding principles https://wiki2.org/en/Caesar_cipher
CLI tool should accept 4 options (short alias and full name):
-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode
for examlle:
node caesar-cipher-cli --action decode --shift 7 --input encoded.txt --output plain.txt
