using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.SceneManagement;

public class scriptNPC : MonoBehaviour
{
    Vector3 rot = Vector3.zero;
    float rotSpeed = 40f;
    Animator anim;
    private NavMeshAgent agente;
    public GameObject pc;
    // Start is called before the first frame update

    void Awake()
    {
        anim = gameObject.GetComponent<Animator>();
        //gameObject.transform.eulerAngles = rot;
    }
    void Start()
    {
        agente = GetComponent<NavMeshAgent>();
        anim.SetBool("Walk_Anim", true);
    }
    void OnCollisionEnter(Collision c)
    {
        if (c.gameObject.Equals(pc.gameObject))
        {
            
            if (scriptController.poder)
            {
                Destroy(this.gameObject);
            }
            else
            {
                scriptController.vida -= 1;
                pc.transform.position = new Vector3(0, 2.4f, -1.7f);
            }
        }
        if(scriptController.vida <= 0)
        {
            scriptController.vida = 3;
            SceneManager.LoadScene(2);
        }

    }
    // Update is called once per frame
    void Update()
    {
        if (scriptController.poder)
        {
            agente.SetDestination(new Vector3(-pc.transform.position.x, pc.transform.position.y, -pc.transform.position.z));
        }
        else
        {
            agente.transform.LookAt(pc.transform.position);
            agente.updateRotation = pc;
            agente.SetDestination(pc.transform.position);
        }


    }
}
