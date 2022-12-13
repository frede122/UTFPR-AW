using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class scriptController : MonoBehaviour
{
    // Start is called before the first frame update

    public static int vida = 3;
    public int qtdBolinhas = 34;
    public static int pontos = 0;
    public static bool poder = false;
    public float timePoder = 1500f;
    private float timeP;
    public AudioSource audioS;

    public Text textVida;
    public Text textPonto;
    void Start()
    {
        timeP = timePoder;
    }

    void TempoPoder()
    {
        if (!poder || timeP <= 0)
        {
            poder = false;
            timeP = timePoder;
        }
        else
        {
            timeP -= Time.deltaTime;
        }
    }

    // Update is called once per frame
    void Update()
    {
        textPonto.text = pontos + "/34 Pontos";
        textVida.text = vida + " Vidas";

        if(pontos >= qtdBolinhas)
        {
            pontos = 0;
            poder = false;
            vida = 3;
            SceneManager.LoadScene(1);
        }
        TempoPoder();
    }
}
