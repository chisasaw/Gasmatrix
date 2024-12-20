# Gasmatrix: Ethereum Gas Optimizer 

## Overview

A web-based tool for analyzing and optimizing Ethereum smart contract gas consumption.

## Features

- Static analysis of Ethereum smart contracts
- Identification of gas-heavy operations
- Automated optimization recommendations
- Estimated gas savings for each suggestion

## Prerequisites

- Python 3.9+
- pip
- solidity compiler

## Installation

```bash
# Clone the repository
git clone https://github.com/chisasaw/gasmatrix.git

# Navigate to project directory
cd gasmatrix

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt
```

## Configuration

Create a `.env` file with the following variables:
```
ETHEREUM_NODE_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
DATABASE_PATH=./gas_optimizer.db
```

## Running the Application

```bash
# Start the FastAPI server
uvicorn main:app --reload

# Run tests
python -m pytest tests/
```

## Usage

1. Upload Solidity smart contract
2. Receive gas optimization recommendations
3. Review estimated gas savings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Warren Chisasa - warrenchisasa@gmail.com

Project Link: [https://github.com/chisasaw/gasmatrix](https://github.com/chisasaw/gasmatrix) 