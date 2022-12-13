using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptBola : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject pc;
    public AudioSource audioSource;
    public AudioClip clipPegar;

    void Start()
    {

    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.Equals(pc.gameObject))
        {
            scriptController.pontos += 1;
            audioSource.PlayOneShot(clipPegar);
            if(this.gameObject.tag == "amarela")
            {
                scriptController.poder = true;
            }
            
            
            Destroy(this.gameObject);
        }
    }



    // Update is called once per frame
    void Update()
    {
        
    }
}
