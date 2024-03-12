import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Header from "../../header/Header.js";

import '../../style/NewList.css'

const API_BASE = "http://localhost:3001"

const ListCreate = () => {


    // async function createNewList(ev){

    
    // }

    return(
        <div>
            <div className='header'>
                <Header />
            </div>

            <div className="NovaLista">Nova Lista</div>

            <div id="formlist">
                <form>
                    <div>
                        <label htmlFor="nome">Nome</label><span>*</span>
                        <input type="text" id="nome" name="nome" />
                    </div>

                    <div>
                        <label htmlFor="privacidade">Privacidade</label>
                        <select id="privacidade" name="privacidade">
                            <option value="publico">Público</option>
                            <option value="privado">Privado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="ordenacao">Ordenação</label>
                        <select id="ordenacao" name="ordenacao">
                            <option value="nome">Nome</option>
                            <option value="adicionado">Adicionado por Último</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="descricao" name="descricao" rows="4" cols="50"></textarea>
                    </div>

                    <button type="submit">Salvar</button>
                    <button type="button">Cancelar</button>
                </form>
            </div>

        </div>
    );

};

export default ListCreate;