using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class navScript : MonoBehaviour
{
    public Text textPonto;
    // Start is called before the first frame update
    void Start()
    {

    }

    public void iniciar()
    {
        SceneManager.LoadScene(1);
        
    }

    public void sair()
    {
        Application.Quit();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            iniciar();
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            sair();
        }

        textPonto.text = scriptController.pontos + " Pontos!";
    }
}
