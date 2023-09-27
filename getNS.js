const dns = require('dns');
const args = process.argv.slice(2);
const domain = args[0];

dns.resolveNs(domain, (err, addresses) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(`Name servers for ${domain}:`);
    addresses.forEach((address, index) => {
      console.log(`NS${index + 1}: ${address}`);
    });
  }
});