// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract miContrato {

    struct Viajes {
        string Destino;
        uint256 Precio;
    }

    mapping (uint256 => Viajes) ViajesFecha;

    function guardar (uint fecha, string memory destino, uint precio) public {
        ViajesFecha[fecha] = Viajes(destino, precio);
    }

    function consultar (uint fecha) public view returns(string memory, uint){
        return(ViajesFecha[fecha].Destino,ViajesFecha[fecha].Precio);
    }
}