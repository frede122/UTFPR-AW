using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class scriptNPC : MonoBehaviour
{
    // Start is called before the first frame update
    private float velocidade = 1.0f;
    private Rigidbody inimigoRBD;

    //Animator anim;
    //public GameObject player;
    //private NavMeshAgent NavMesh;

	// Use this for initialization

		
    void Start()
    {
        //inimigoRBD = GetComponent<Rigidbody>();
        //player = GameObject.FindWithTag("PC");
        //NavMesh = GetComponent<NavMeshAgent>();
        
        //anim = GameObject.GetComponent<Animator>();
        
    }

    // Update is called once per frame
    void Update()
    {
        //NavMesh.SetDestination(player.transform.position);

    }
}
