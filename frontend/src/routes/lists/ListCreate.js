import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; 
import Modal from "../commons/Modal"

import Header from "../../header/Header.js";
import '../../style/NewList.css'

const API_BASE = "http://localhost:3001";

const ListCreate = () => {


    const [name, setName] = useState('')
    const [privacy, setPrivacy] = useState('')
    const [sort, setSort] = useState('')
    const [description, setDescription] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [nextPage, setNextPage] = useState('/lists')

    // async function createNewList(ev){
        
    //     ev.preventDefault()

    //     const data = new FormData();
    //     data.append('name',name);
    //     data.append('privacy', privacy);
    //     data.append('sort', sort);
    //     data.append('description', description)

    //     const response = await fetch(API_BASE + '/lists/create', {
    //         method: 'POST',
    //         body: data
    //     })

    //     if (response.ok){
    //         const list = await response.json();

    //         setNextPage('/lists' + list._id)
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     } else{
    //         console.error('Failed to create list:', response.statusText)
    //     }

    // }

    return(
        <div>
            <div className='header'>
                <Header />
            </div>

            <div className="NovaLista">Nova Lista</div>

            <div id="formlist">
            {openModal && <Modal closeModal={setOpenModal} title="Lista criada com sucesso" nextPage={nextPage}/>}

                <form>
                    <div>
                        <label htmlFor="nome">Nome</label><span>*</span>
                        <input type="text" id="nome" name="nome"
                        onChange={ev => setName(ev.target.value)}/>

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
                        <input id="descricao" name="descricao" rows="4" cols="50"
                        onChange={ev => setDescription(ev.target.value)}/>
                    </div>

                    {/* <button type="submit" onClick={createNewList}>Salvar</button> */}
                    <button type="submit">Salvar</button>
                    <button type="button">Cancelar</button>
                </form>
            </div>

        </div>
    );

};

export default ListCreate;