using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptPC : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject bolinha;
    private Rigidbody rbd;
    public float vel = 15f;
    void Start()
    {
        rbd = GetComponent<Rigidbody>();
    }



    Vector3 rot = Vector3.zero;
	float rotSpeed = 40f;
	Animator anim;

    void OnCollisionEnter(Collision c)
    {
        

    }


    // Update is called once per frame
    void Update()
	{
        float unidadeY = Input.GetAxis("Vertical")  * Time.deltaTime * vel;
        float unidadeX = Input.GetAxis("Horizontal")  * Time.deltaTime * vel;

        //rbd.velocity = new Vector3(moveLado,    rbd.velocity.y, moveFrente);

        transform.Translate(unidadeX, 0, unidadeY);

        if (Input.GetKeyDown(KeyCode.Space))
        {
            scriptController.pontos = scriptController.pontos + 1;
        }
	}

	
}
